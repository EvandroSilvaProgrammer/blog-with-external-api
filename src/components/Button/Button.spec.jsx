import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

describe('<Button />', () => {

    it('should render the button with the text', () => {
        render(<Button text="Load more" />);
        expect.assertions(1); //Check if x assertions are called

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
    });

    it('should call function on button click', () => {
        const fn = jest.fn(); //MOCK
        render(<Button text="Load more" onClick={fn} />);

        const button = screen.getByRole('button', { name: /load more/i });

        userEvent.click(button);

        expect(fn).toHaveBeenCalled();
    });

    it('should be disabled when disabled is true', () => {
        render(<Button text="Load more" disabled={true} />);

        expect(screen.getByRole('button', { name: /load more/i })).toBeDisabled();
    });

    it('should match snapshot', () => {
        const fn = jest.fn(); 
        const {container} = render(<Button text="Load more" onClick={fn} />);
        expect(container.firstChild).toMatchSnapshot();
    });

});