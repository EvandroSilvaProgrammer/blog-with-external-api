import { render } from '@testing-library/react';

import { TextInput } from '.';

describe('<TextInput />', () => {

    it('should call handleChange function on each key pressed', () => {
        const {debug} = render(<TextInput handleChange={jest.fn()} seacrhValue={'Testando'} />);

        debug();

    });
    
});
