import { Card } from 'react-bootstrap';
function BookItem(props) {

    return (
        <div>
            <Card>
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0"></blockquote>
                    {/* Added book image */}
                    <img src={props.myBook.thumbnailUrl}></img>
                    <footer>
                        {props.myBook.authors[0]}
                    </footer>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BookItem;