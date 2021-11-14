import { render, screen } from "@testing-library/react";
import { Posts } from ".";

//Describe the Posts component (MOCK)
const props = {
    posts: [
        {
            id: 1,
            title: "title 1",
            body: "body 1",
            cover: "cover 1",
        },
        {
            id: 2,
            title: "title 2",
            body: "body 2",
            cover: "cover 2",
        },
        {
            id: 3,
            title: "title 3",
            body: "body 3",
            cover: "cover 3",
        }
    ]
};

describe('<Posts />', () => {
    it('should render posts', () => {
        render(<Posts {...props} />);

        expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);

        expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);

        expect(screen.getAllByText(/body/i)).toHaveLength(3);
    });

    it('should match snapshot', () => {
        const { container } = render(<Posts {...props} />);

        expect(container.firstChild).toMatchSnapshot();
    });
});
