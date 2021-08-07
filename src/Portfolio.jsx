import React, {useEffect, useState} from 'react';
import './portfolio.css';
import portsvg from './img/portsvg.svg';
import portpro from './img/portprofile.svg';
import {useHistory} from 'react-router-dom'



function Portfolio(props){
    const history = useHistory();

    if(!props.id){
        history.push("/signin")
    }

    const [detail , setDetail] = useState([]);

let r = '/portfolio/'
    console.log(props.id);

    const calla =  () => {

        // try{
        //     const rese = fetch(`${r}${props.id}`,{
        //             method:"GET"
        //     })
        //     const data = await res.json();
        //         setDetail(data);
        //         console.log(data);

        // }catch(err){
        //     console.log(err);
        // }
      

            return fetch(`${r}${props.id}`,{
                method:"GET"
                
            }).then((res) => {
                // const data =  res.json();
                // setDetail(data);
                // console.log(data);


                return res.json();
            }).catch((err)=>{
                console.log(err);
            })

            
            // console.log(data);

           
            

        
    }

   

    useEffect(() => {
        //  calla();
        getuserdata();
    },[]);

    const getuserdata = () =>{
        calla().then((data)=>{
            setDetail(data);
                console.log(data);
        }).catch((err)=>{
            console.log(err);

        })
    }

    return(

        <>
        
<div className="portback">
<div className="new">

<img src={portsvg} alt="bg" className="portimg shadow-lg p-3 mb-5 bg-body rounded"/>
</div>
<h1 className="f1">Hello, I'am </h1>
<h1 className="f2">{detail.dfname} {detail.dlname}</h1>

</div>
<div class="container text-center shadow-lg p-3 mb-5 bg-body rounded" style={{marginTop:"50px"}}>
        <h3 className="shadow-lg p-3 mb-5 bg-body rounded blk">About Me</h3>
        <p className="blk">Hey, I am an {detail.dfname} intend to build a career with an organisation with dedicated people which will help me to explore myself, I’m a type person Once I say I’ll do something, I will complete it at any chance I am willing to work as a key player In challenging and creative environment.</p>
       
    </div>

    <div className="portback2">
    <div className="container text-center shadow-lg p-3 mb-5 bg-body rounded " style={{marginTop: "128px",
    position: "absolute",
    left: "328px",
    width: "458px"}}>
        <h3 className="shadow-lg p-3 mb-5 bg-body rounded blk">Personal Details</h3>
        <p className="blk">Email:- {detail.dmail}</p>
        <p className="blk">Phone:- {detail.dmobile}</p>

            

<img src={portpro} alt="bg" className="portimg2  rounded" style={{position: "absolute",
    left: "410px",
    top: "-88px"}}/>

    </div>

</div>
<div className="container text-center shadow-lg p-3 mb-5 bg-body rounded " style={{marginTop: "-190px",
    position: "absolute",
    left: "119px",
    width: "621px"}}>
        <h3 className="shadow-lg p-3 mb-5 bg-body rounded blk">Education</h3>
        <p className="blk">University:- {detail.duniname}</p>
        <p className="blk">From:- {detail.dfromuni}</p>
        <p className="blk">To:- {detail.dtouni}</p>



        <p className="blk">CGPA:- {detail.dcgpa}</p>
        <p className="blk">City:- {detail.dcity}</p>


            

    </div>

    <div className="container text-center shadow-lg p-3 mb-5 bg-body rounded " style={{marginTop: "-190px",
    position: "absolute",
    right: "39px",
    width: "621px"}}>
        <h3 className="shadow-lg p-3 mb-5 bg-body rounded blk">Project</h3>
        <p className="blk">Name:- {detail.dproject}</p>

        <p className="blk">From:- {detail.dprofrom}</p>
        <p className="blk">To:- {detail.dproto}</p>
        <p className="blk">Mentor:- {detail.dmentor}</p>


        <p className="blk">Description:- {detail.ddesc}</p>

            

    </div>
    <footer>

    </footer>
        {/* <form method="GET">
            <h1 style={{color:"black"}}>{detail.name}</h1>
        </form> */}
        </>
    );
}

export default Portfolio;