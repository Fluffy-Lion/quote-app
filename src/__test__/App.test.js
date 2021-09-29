import { render, screen } from "@testing-library/react";
import App from "../App"

test("should fetch quote, from app", async () => {
    render(<App />)
    const paragraphElement = await screen.findByTestId("quoteItem")
    expect(paragraphElement).toBeInTheDocument() 
})
