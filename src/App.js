 

function App(){
    const title = "Blog Post"
    const body = "This is my blog post"
    

    return (
        <>
         <h1>{title.toUpperCase()}</h1>
         <p>{body}</p>
         {Math.random() * (5+5)}

        </>
    
    )
}

export default App;