// Home Page
function Content() {
    return (
        <div>
            {/* Outputs "Hello World" and local time */}
            <h2>Hello World</h2>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Content;