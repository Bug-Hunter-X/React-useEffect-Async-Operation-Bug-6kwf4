```javascript
// In a functional component
const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect asynchronous operation inside useEffect
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const data = await response.json();
      setCount(data.count); // Setting state with data from API
    };

    fetchData(); // Calling the async function
  }, []); // Empty dependency array: useEffect runs only once

  return <div>Count: {count}</div>;
};
```