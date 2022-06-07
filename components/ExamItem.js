(function(){
    'use strict';
    
    class ExamInfo extends React.Component{
        render(){
            return(
                <div className="exam_title">
                    <div className="titlebg">
                        <span className="titlebg_chword"><a>01</a></span>
                        <span className="titlebg_decword"><a>Test</a></span>
                    </div>
                    <div className="exam_chapter">
                        <a>第一回</a>
                    </div>
                </div>
            )
        }
        
    }

    class ExamBtn extends React.Component{
        handleChange = e => {
            console.log(e.target.value);
        };
        

        render(){
            return(
                <>

                <a>this</a>
                <label className="container">One
                    <input type="radio" name="type" value='A' onChange={this.handleChange}/>
                    <span className="checkmark"></span>
                </label>
                <label className="container">Two
                    <input type="radio" name="type" value='B' onChange={this.handleChange}/>
                    <span className="checkmark"></span>
                </label>
                <label className="container">Three
                    <input type="radio" name="type" value='C' onChange={this.handleChange}/>
                    <span className="checkmark"></span>
                </label>
                <label className="container">Four
                    <input type="radio" name="type" value='D' onChange={this.handleChange}/>
                    <span className="checkmark"></span>
                </label>
                </>
                
            )
        }
    }

    ReactDOM.render(
        <div>
            <ExamInfo/>
            <ExamBtn/>
            <ExamBtn/>
        </div>,
        document.getElementById('ExamItemid'));
})();