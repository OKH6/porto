import React, { Component } from 'react'
import {Person,Description,GitHub,ArrowBackIcon} from "@material-ui/icons"
import ArrowBack from '@material-ui/icons/ArrowBack';









class HandleProjects extends Component {

      render(){
        console.log(this.props.Type)
        if (this.props.Type==="projects") {
            return(






              
              <div className="added">
              {this.props.data.map((d) => (
                <div>
                  <div className="item">
                      <img src={d.img} alt="" />
                      <h3>{d.title}</h3>
                      <div className="cons">
                        <a href= {d.link} target="_blank"><GitHub className="icon"/></a>
                        <Description className="icon" onClick={()=> this.props.setProject("WebGL")}/>
                        
                      </div>
                      
                  </div>
                  <div className="underBar">
                    <h4>{d.title}</h4>
                    <h4>{d.title}</h4>
                    <h4>{d.title}</h4>

                  </div>
                  
                </div>
                  
              ))}
              </div>
        
        
            )
          
        }else if(this.props.Type==="WebGL"){
          return(
            <div className="Content">
              <ArrowBack className="icon" onClick={()=>{if(this.props.selected!="featured"){this.props.setSelected("featured")}else if(this.props.selected!="web"){this.props.setSelected("web")}} }/>
            

            <h1>Broken {this.props.Type}</h1>
            <h3> The expression inside of an if statement decides whether to execute the statements inside the if block or under the else block. For switch, the expression inside switch statement decides which case to execute.
The if-else statement checks for equality as well as for logical expression. On the other hand, switch checks only for equality.
The if statement evaluates integer, character, 
The expression inside of an if statement decides whether to execute the statements inside the if block or under the else block. For switch, the expression inside switch statement decides which case to execute.
The if-else statement checks for equality as well as for logical expression. On the other hand, switch checks only for equality.
The if statement evaluates integer, character, 

pointer or floating-point type or boolean type. On the other hand, switch statement evaluates only character or an integer datatype.
Sequence of execution is like either statement under if block will execute or statements under else block statement will execute. However, the expression in the switch statement decides which case to execute and if you do not apply a break statement after each case it will execute till the end of switch statement.
The expression inside of an if statement decides whether to execute the statements inside the if block or under the else block. For switch, the expression inside switch statement decides which case to execute.
The if-else statement checks for equality as well as for logical expression. On the other hand, switch checks only for equality.
The if statement evaluates integer, character, 

pointer or floating-point type or boolean type. On the other hand, switch statement evaluates only character or an integer datatype.
Sequence of execution is like either statement under if block will execute or statements under else block statement will execute. However, the expression in the switch statement decides which case to execute and if you do not apply a break statement after each case it will execute till the end of switch statement.
The expression inside of an if statement decides whether to execute the statements inside the if block or under the else block. For switch, the expression inside switch statement decides which case to execute.
The if-else statement checks for equality as well as for logical expression. On the other hand, switch checks only for equality.
The if statement evaluates integer, character, 

pointer or floating-point type or boolean type. On the other hand, switch statement evaluates only character or an integer datatype.
Sequence of execution is like either statement under if block will execute or statements under else block statement will execute. However, the expression in the switch statement decides which case to execute and if you do not apply a break statement after each case it will execute till the end of switch statement.

pointer or floating-point type or boolean type. On the other hand, switch statement evaluates only character or an integer datatype.
Sequence of execution is like either statement under if block will execute or statements under else block statement will execute. However, the expression in the switch statement decides which case to execute and if you do not apply a break statement after each case it will execute till the end of switch statement.</h3>



            </div>


          ) 
        }
    
      }
}

export default HandleProjects

