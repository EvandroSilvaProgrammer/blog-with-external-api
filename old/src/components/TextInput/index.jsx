import './styles.css';

export const TextInput = ({ seacrhValue, handleChange }) => {
    return (
        <input
            className="text-input"
            type="search"
            onChange={handleChange}
            value={seacrhValue}
            placeholder="Type your search"
        />

    );
}