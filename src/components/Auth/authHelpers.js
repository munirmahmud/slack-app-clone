export const formatErrors = (errors = []) => {
    return errors.length > 0 && errors.map((error, index) => (
        <div key={index} className="alert danger">{error.message}</div>
    ));
};