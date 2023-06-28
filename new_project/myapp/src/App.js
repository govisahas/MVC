const message  = [
    "learn React",
    "Apply for a job",
    "Invest your income",
];

export default function App(){

    const step  = 1;

    function handlePrevious(){
        alert(" previous");
    }

    function handleNext(){
          alert("Next");
    }

    return(
        <div>
        <div className  = "numbers">
            <div className= {`${step >=1 ? "active" : ""}`}>1</div>
            <div className= {`${step >=2 ? "active" : ""}`}>2</div>
            <div className= {`${step >=3 ? "active" : ""}`}>3</div>
        </div>
        <button  onClick={()=>handleNext()}> Next</button>
        <button  onClick={()=>handlePrevious()}>Previous</button>
        </div>
    );
}