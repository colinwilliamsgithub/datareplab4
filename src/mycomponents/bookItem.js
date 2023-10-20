import { Card } from 'react-bootstrap';
function BookItem(props) {

    return (
        <div>
            <Card>
                {/* Displays book title */}
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0"></blockquote>
                    {/* Displays book image */}
                    <img src={props.myBook.thumbnailUrl}></img>
                    <footer>
                        {/* Displays book author */}
                        {props.myBook.authors[0]}
                    </footer>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BookItem;