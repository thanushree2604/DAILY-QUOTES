const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		const response = JSON.parse(this.responseText);
        const quote = response.quote;
        const author = response.author;
        document.getElementById("q").innerText = quote
        document.getElementById("a").innerText = author
	}
});

xhr.open('GET', 'https://inspirational-quote-generator.p.rapidapi.com/quoteGenerator');
xhr.setRequestHeader('x-rapidapi-key', 'bfdc462786msh151b4d04059256dp1eb37ejsn92fca8e6b71c');
xhr.setRequestHeader('x-rapidapi-host', 'inspirational-quote-generator.p.rapidapi.com');

xhr.send(data);