(function(){
    'use strict';
    function handleChange(e){
        ch_num=e;
        console.log('chapter:'+ch_num);
        $('.examPage_content').show();
        $('.frontPage_content').hide();

    };
    class ChapterBtns extends React.Component{        

        render(){
            return(
                <div className="chapterbtn" onClick={this.props.cfunction}>
				    <svg className='bi checkicon'></svg>
                    <a>{this.props.name}</a>
			    </div>
                
            )
        }
    }

    ReactDOM.render(
        <div className='btnbox'>
            <ChapterBtns name={'第一回測驗'} cfunction={()=>handleChange(1)}/> 
            <ChapterBtns name={'第二回測驗'} cfunction={()=>handleChange(2)}/>
            <ChapterBtns name={'第三回測驗'}/> 
            <ChapterBtns name={'第四回測驗'}/>
            <ChapterBtns name={'第五回測驗'}/> 
            <ChapterBtns name={'第六回測驗'}/>
            <ChapterBtns name={'第七回測驗'}/> 
            <ChapterBtns name={'第八回測驗'}/>
            <ChapterBtns name={'第九回測驗'}/> 
            <ChapterBtns name={'第十回測驗'}/>
        </div>,
        document.getElementById('ChapterBtnid'));
})();