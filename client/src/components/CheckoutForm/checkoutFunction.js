
export const handleChange = (setValue) => {
        return (e) => {
            setValue((prevValue) => (
                { ...prevValue, [e.target.name]: e.target.value })
            )
    }
    } 
export const handlecheckout = (value, addOrder, setIsOpen) => {
        return (e) => {
            e.preventDefault();
            const order = {
                name: value.name,
                email: value.email
            }
            addOrder(order)      
            setIsOpen(true);
        }
    }