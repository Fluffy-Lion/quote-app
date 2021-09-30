import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import QuoteButton from "../Components/QuoteButton";

// const mockedSetTodo = jest.fn;

describe("app tests", () => {
  test("should fetch quote, from app", async () => {
    render(<App />);
    const paragraphElement = await screen.findByTestId("quoteItem");
    expect(paragraphElement).toBeInTheDocument();
  });

  test("find button in document", () => {
    render(<App />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("find button by test id", () => {
    render(<App />);
    const buttonElement = screen.getByTestId("quoteButton");
    expect(buttonElement).toBeInTheDocument();
  });
  test("fire button from QuoteButton component", () => {
    render(<QuoteButton />);
    const buttonElement = screen.getByTestId("quoteButton");
    expect(buttonElement).toBeInTheDocument();
  });
  test("find button by text", () => {
    render(<QuoteButton>get a quote</QuoteButton>);
    const buttonElement = screen.getByText(/get a quote/i);
    expect(buttonElement).toBeInTheDocument()
  });
  test("fire event from QuoteButton component", () => {
    const mockCollect = jest.fn();
    render(<QuoteButton collect={mockCollect}>get a quote</QuoteButton>);
    const buttonElement =  screen.getByRole("button", { name: /get a quote/i });
    fireEvent.click(buttonElement);
    expect(mockCollect).toHaveBeenCalledTimes(1);
  });
});
