function JokeCard({ joke }) {
    return (
        <div className="joke-card">
            
            <div key={joke.id}>
                <h3>{joke.author}</h3>
                <p>{joke.content}</p>
            </div>
        </div>
    );
}
export default JokeCard;