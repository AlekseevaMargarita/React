import { render } from "@testing-library/react";
import NoMatch from "../NoMatch"

describe('NoMatch tests', () => {
    it('matches snapshot', () => {
        const component = render(<NoMatch />);
        expect(component).toMatchSnapshot();
    });
});