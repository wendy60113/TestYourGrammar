(function(){
    'use strict';
    
    var ch_num=1;
    var ans_num = ['E','E','E','E','E','E','E','E','E','E'];
    var Raw_Ans = ['A','B','C','C','A','c','A','B','C','C'];
    var Check_Ans = ['A','A','A','A','A','A','A','A','A','A'];

    var ana_numtdata;
    var colorlist=[{color:'black'},{color:'black'},{color:'black'},{color:'black'},{color:'black'},{color:'black'},{color:'black'},{color:'black'},{color:'black'},{color:'red'}];
    var f_num =0;
    const ch_data =[
        {
            "ch_num":'01',
            "ch_name":'第一回'
        },
        {
            "ch_num":'02',
            "ch_name":'第二回'
        },
        {
            "ch_num":'03',
            "ch_name":'第三回'
        }
    ]

    /*下線使用*/
		const data =[
      [
        {
          "id": 1,
          "num": '01',
          "topic": "Could you tell me your surname?",
          "ans1": "Would you like me to spell it?",
          "ans2": "Do you like my family name?",
          "ans3": "How do I say that?",
          "ans4": "No, I don't want to eat.",
          "r_ans": "A",
          "r_ans_word": "Would you like me to spell it?",
          "topic_ch": "尚未有解析",
          "ana": "尚未有解析"
        },
        {
          "id": 2,
          "num": '02',
          "topic": "This plant looks dead.",
          "ans1": "It's in the garden.",
          "ans2": "It only needs some water.",
          "ans3": "It's sleeping.",
          "ans4": "It's the most beautiful flower.",
          "r_ans": "B",
          "r_ans_word": "It only needs some water.",
          "topic_ch": "尚未有解析",
          "ana": "尚未有解析"
        },
        {
          "id": 3,
          "num": '03',
          "topic": "I hope it doesn't rain.",
          "ans1": "Of course not.",
          "ans2": "Will it be wet?",
          "ans3": "So do I.",
          "ans4": "Well, thank you.",
          "r_ans": "C",
          "r_ans_word": "So do I.",
          "topic_ch": "尚未有解析",
          "ana": "尚未有解析"
        },
        {
          "id": 4,
          "num": '04',
          "topic": "Are you going to come inside soon?",
          "ans1": "For ever.",
          "ans2": "Not long.",
          "ans3": "In a minute.",
          "ans4": "I don't like it.",
          "r_ans": "C",
          "r_ans_word": "In a minute.",
          "topic_ch": "尚未有解析",
          "ana": "尚未有解析"
        },
        {
          "id": 5,
          "num": '05',
          "topic": "Who gave you this book, Lucy?",
          "ans1": "I bought it.",
          "ans2": "For my birthday.",
          "ans3": "My uncle was.",
          "ans4": "Who are you?",
          "r_ans": "A",
          "r_ans_word": "I bought it.",
          "topic_ch": "尚未有解析",
          "ana": "尚未有解析"
        },
        {
          "id": 6,
          "num": '06',
          "topic": "Shall we go out for pizza tonight?",
          "ans1": "I know that.",
          "ans2": "It's very good.",
          "ans3": "I'm too tired.",
          "ans4": "I can do that.",
          "r_ans": "C",
          "r_ans_word": "I'm too tired.",
          "topic_ch": "尚未有解析",
          "ana": "尚未有解析"
        },
        {
          "id": 7,
          "num": '07',
          "topic": "Do you mind if I come too?",
          "ans1": "That's fine!",
          "ans2": "I'd like to.",
          "ans3": "I don't know if I can.",
          "ans4": "I'm too tired.",
          "r_ans": "A",
          "r_ans_word": "That's fine!",
          "topic_ch": "我尚未有解析",
          "ana": "尚未有解析"
        },
        {
          "id": 8,
          "num": '08',
          "topic": "There's someone at the door.",
          "ans1": "Can I help you?",
          "ans2": "Well, go and answer it then.",
          "ans3": "He's busy at the moment.",
          "ans4": "Hey, why you are so wet?",
          "r_ans": "B",
          "r_ans_word": "Well, go and answer it then.",
          "topic_ch": "尚未有解析",
          "ana": "尚未有解析"
        },
        {
          "id": 9,
          "num": '09',
          "topic": "How much butter do I need for this cake?",
          "ans1": "I'd like one.",
          "ans2": "I'll use some.",
          "ans3": "I'm not sure.",
          "ans4": "Just go away.",
          "r_ans": "C",
          "r_ans_word": "I'm not sure.",
          "topic_ch": "尚未有解析",
          "ana": "尚未有解析"
        },
        {
          "id": 10,
          "num": '10',
          "topic": "How long are you here for?",
          "ans1": "Since last week.",
          "ans2": "Ten days ago.",
          "ans3": "Till tomorrow.",
          "ans4": "It's ten o'clock.",
          "r_ans": "C",
          "r_ans_word": "Till tomorrow.",
          "topic_ch": "尚未有解析",
          "ana": "尚未有解析"
        }]
      ]
		/*上線使用
		fetch('./js/TestYourGrammar_data.json')
			.then(response => response.json())
			.then(data => {
				console.log(data)
			})
		*/
      
    class ExamContent_id extends React.Component{        

      render(){
          return(
            <div>
              <div className='exam_box'>
                <ExamContent chapter_num={0}/>
              </div>

              <div className='menubox'>
                <MenuBtn name={'立即交卷'} style={'hl_menu_btn'} playfunction={()=>checkFinish()}/>
              </div>
            </div>
              
          )
      }
  }
    
    /* /////EXAMPAGE///// */
    function handleChange (idnum,ans){
        ans_num[idnum-1]=ans;
        console.log(ans_num);

    };

    /* /////MENUBTN///// */
    function checkFinish(){
      f_num=0;
     
      for(var f=0;f<10;f++){
        console.log(f);
        if(ans_num[f]!='E'){
          f_num+=1;
         
        }
      }

      if(f_num==10){
        checkAns();
      }else{
        alert('你必須完成所有的練習題。\r\n'+'還有'+(10-f_num)+'題！');
      }
      
      
    }


    function checkAns(){
        for(var a=0;a<10;a++){
          if(ans_num[a]==Raw_Ans[a]){
            Check_Ans[a] = data[ch_num-1][a].r_ans_word;
            //colorlist[a] = {color:'black'};
           
          }else{
            //colorlist[a] = {color:'red'};
            switch(ans_num[a]){
              case 'A':
                Check_Ans[a] = data[ch_num-1][a].ans1;
                break;
                
              case 'B':
                Check_Ans[a] = data[ch_num-1][a].ans2;
                break;
                  
              case 'C':
                Check_Ans[a] = data[ch_num-1][a].ans3;
                break;

              case 'D':
                Check_Ans[a] = data[ch_num-1][a].ans4;
                break;
              
              case 'E':
                Check_Ans[a] = data[ch_num-1][a].ans1;
                break;

              
            }
          }
        }
        console.log('checkans:'+Check_Ans);
        document.getElementById('ana_chword').innerHTML = ch_data[ch_num-1].ch_num;
        document.getElementById('ana_chword_ch').innerHTML = ch_data[ch_num-1].ch_name;

        //document.getElementById('ana_ans').innerHTML = Raw_Ans;

        $('.examPage_content').hide();
        $('#ExamContent_id').hide();
        $('.anaPage_content').show();
        $('#AnaContent_id').show();

        $('html,body').scrollTop(0);

        ana_numtdata=[1,2,3,4,5,6,7,8,9,10];

        const anacontent = ana_numtdata.map((thisanadata)=>
        <div key={thisanadata}>
          <AnaItem
            num = {data[ch_num-1][thisanadata-1].num}
            topic = {data[ch_num-1][thisanadata-1].topic}
            r_ans_word = {data[ch_num-1][thisanadata-1].r_ans_word}
            wrong_ans={Check_Ans[thisanadata-1]}
            ana={data[ch_num-1][thisanadata-1].ana}
            topic_ch={data[ch_num-1][thisanadata-1].topic_ch}
            ans_num={data[ch_num-1][thisanadata-1].r_ans}
            wrong_ans_num={ans_num[thisanadata-1]}
          /><br/>

        </div>
        )

        var ana_title_item={
            
        }


        const anatitlecontent = ana_numtdata.map((thisanatdata)=>
        
        <div key={thisanatdata} >
          <AnaTitleItem
            
            anaword = {Raw_Ans[thisanatdata-1]}
            answordcolor = {ana_title_item}
          />
        </div>
        
        )


        ReactDOM.render(
          <div>
            <div className='ana_box'>
              <div className='ana_title_item_box'>
                {/*{anatitlecontent}*/}
              </div>
              {anacontent}
            </div>
           
              
            <div className='menubox'>
              <MenuBtn name={'再測一次'} style={'menu_btn'} playfunction={()=>againtest()}/>
              
            </div>
           
          </div>
      ,
      document.getElementById('AnaContent_id'));
    }

    function againtest(){
        
        $('.anaPage_content').hide();
        $('.examPage_content').show();
        $('#ExamContent_id').show();
        $('.anaPage_content').hide();
        $('#AnaContent_id').hide();

        $('input[name=examname]').prop('checked', false);
        $('html,body').scrollTop(0);
    }

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

    /* /////EXAMPAGE ///// */
    class ExamInfo extends React.Component{
      render(){
          return(
              <div className="exam_title">
                  <div className="titlebg">
                      <span className="titlebg_decword"><a>Test</a></span>
                      <span className="titlebg_chword"><a id='chword'>01</a></span>
                      
                  </div>
                  <div className="exam_chapter">
                      <a id='chword_ch'>第一回</a>
                  </div>
              </div>
          )
      }
      
  }

    class ExamContent extends React.Component{
        render(){
            const content = data[this.props.chapter_num].map((thisdata) =>
                <div key={thisdata.id} className='exam_item'>
                  <div className='exam_item_header'>
                    <span className='num'>{thisdata.num}</span>
                    <span className='topic'>{thisdata.topic}</span>
                  </div>
                <form>
                  <div className='exam_btn'>
                    <span className='exam_btn_num'>A</span>
                    
                    <label className="container">
                      <input type="radio" name="examname" value='A' onChange={()=>handleChange(thisdata.num,'A') }/>
                      <span className="exam_answord">{thisdata.ans1}</span>
                      <span className="checkmark"></span>
                    </label>
                  </div>

                  <div className='exam_btn'>
                    <span className='exam_btn_num'>B</span>
                  <label className="container">
                    <input type="radio" name="examname" value='B' onChange={()=>handleChange(thisdata.num,'B')}/>
                    <span className="exam_answord">{thisdata.ans2}</span>
                    <span className="checkmark"></span>
                  </label>
                  </div>

                  <div className='exam_btn'>
                    <span className='exam_btn_num'>C</span>
                  <label className="container">
                    <input type="radio" name="examname" value='C' onChange={()=>handleChange(thisdata.num,'C')}/>
                    <span className="exam_answord">{thisdata.ans3}</span>
                    <span className="checkmark"></span>
                  </label>
                  </div>

                  <div className='exam_btn'>
                    <span className='exam_btn_num'>D</span>
                  <label className="container">
                    <input type="radio" name="examname" value='D' onChange={()=>handleChange(thisdata.num,'D')}/>
                    <span className="exam_answord">{thisdata.ans4}</span>
                    <span className="checkmark"></span>
                  </label>
                  </div>
                </form>
            </div>
            )
            return(
                <>
                {content}
                </>

            )
        }
    }

    /* /////Ana ///// */
    class AnaInfo extends React.Component{
      render(){
          return(
              <div className="exam_title">
                  <div className="titlebg">
                      <span className="titlebg_decword"><a>Test</a></span>
                      <span className="titlebg_chword"><a id='ana_chword'>01</a></span>
                  </div>
                  <div className="ana_chapter">
                      <a id='ana_chword_ch'>第一回</a><a>解答</a>
                  </div>
              </div>
          )
      }
      
  }

    class AnaItem extends React.Component{
      render(){
        console.log(data[ch_num-1][this.props.num-1].r_ans+ans_num[this.props.num-1]);
        if(data[ch_num-1][this.props.num-1].r_ans==ans_num[this.props.num-1]){
          return(
            <>
            <div className='ana_item'>
            <div className='ana_item_header'>
              <span className='num'>{this.props.num}</span>
              <span className='topic'>{this.props.topic}</span>
            </div>

            <div className='exam_btn'>
              <span className='exam_btn_num'>{this.props.ans_num}</span>
                <label className="ana_container correct"><span className='ana_ans_word correct'>{this.props.r_ans_word}</span>
                  <span className="ana_checkmark ana_correct_checkmark"></span>
                </label>
            </div>

            <div className='ana_word_box'>
              <span className='ana_topic_ch'>解析：</span><br/>
              <span className='ana_word'>{this.props.ana}</span>
            </div>
            </div>
            </>
          )
        }else{
          return(
            <>
            <div className='ana_item'>
              <div className='ana_item_header'>
                <span className='num'>{this.props.num}</span>
                <span className='topic'>{this.props.topic}</span>
              </div>

              <div className='exam_btn'>
                <span className='exam_btn_num'>{this.props.wrong_ans_num}</span>
                  <label className="ana_container wrong"><span className='ana_ans_word wrong'>{this.props.wrong_ans}</span>
                    <span className="ana_checkmark ana_wrong_checkmark"></span>
                  </label>
              </div>

              <div className='exam_btn'>
                <span className='exam_btn_num'>{this.props.ans_num}</span>
                  <label className="ana_container correct"><span className='ana_ans_word correct'>{this.props.r_ans_word}</span>
                    <span className="ana_checkmark ana_correct_checkmark"></span>
                  </label>
              </div>
              <div className='ana_word_box'>
                <span className='ana_topic_ch'>解析：</span><br/>
                <span className='ana_word'>{this.props.ana}</span>
              </div>
            </div>
            </>
          )
        }
      }
    }

    class AnaTitleItem extends React.Component{
      render(){
        return(
          <div>
            <span style={this.props.answordcolor}>{this.props.anaword}</span>
          </div>
        )
      }
    }
    

    /* /////MENUBTN ///// */
    class MenuBtn extends React.Component{
        render(){
          return(
            <div className={this.props.style} onClick={this.props.playfunction}>
              <a>{this.props.name}</a>
            </div>
          )
        }
    }

    ReactDOM.render(
      
        <div>
        
        
        {/*/////EXAMPAGE/////*/} 
        <div className="examPage_content">
            <ExamInfo/>
           
	      </div>

        <div id='ExamContent_id'> 
          <ExamContent_id/>
        </div>

        {/*/////ANAPAGE/////*/} 
        <div className="anaPage_content">
            <AnaInfo/>
	      </div>

        {/*/////BOTTOM/////*/} 
        
        

        </div>,
        document.getElementById('App_id'));

})();