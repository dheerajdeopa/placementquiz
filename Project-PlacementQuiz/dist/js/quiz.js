window.onload = function(){
  show(question_count);
}

let questions = [
  {
    id: 1,
    question: "The physical layer is concerned with ___________",
    answer:"bit-by-bit delivery",
    options:[
      "bit-by-bit delivery",
      "process to process delivery",
      "application to application delivery",
      "port to port delivery"
    ]
    },
    {
    id: 2,
    question: "In asynchronous serial communication the physical layer provides ___________",
    answer:"both start & stop signalling and flow control",
    options:[
      "start and stop signalling",
      "flow control",
      "both start & stop signalling and flow control",
      "only start signalling"
    ]
    },
    {
    id: 3,
    question: "The network layer is concerned with __________ of data.",
    answer:"packets",
    options:[
      "bits",
      "frames",
      "packets",
      "bytes"
    ]
    },
    {
    id: 4,
    question: "Which of the following routing algorithms can be used for network layer design?",
    answer:"all of the mentioned",
    options:[
      "shortest path algorithm",
      "distance vector routing",
      "link state routing",
      "all of the mentioned"
    ]
    },
    {
    id: 5,
    question: "The physical layer is concerned with ___________",
    answer:"bit-by-bit delivery",
    options:[
      "bit-by-bit delivery",
      "process to process delivery",
      "application to application delivery",
      "port to port delivery"
    ]
    },
    {
    id: 6,
    question: "The network layer protocol for internet is __________",
    answer:"internet protocol",
    options:[
      "ethernet",
      "internet protocol",
      "hypertext transfer protocol",
      "file transfer protocol"
    ]
    },
    {
    id: 7,
    question: "ICMP is primarily used for __________",
    answer:"error and diagnostic functions",
    options:[
      "error and diagnostic functions",
      "addressing",
      "forwarding",
      "routing"
    ]
    },
    {
    id: 8,
    question: "Which of the following tasks is not done by data link layer?",
    answer:"channel coding",
    options:[
      "framing",
      "error control",
      "flow control",
      "channel coding"
    ]
    },
    {
    id: 9,
    question: "Which of the following is the multiple access protocol for channel access control?",
    answer:"Both CSMA/CD & CSMA/CA",
    options:[
      "CSMA/CD",
      "CSMA/CA",
      "Both CSMA/CD & CSMA/CA",
      "HDLC"
    ]
    },
    {
    id: 10,
    question: "An endpoint of an inter-process communication flow across a computer network is called __________",
    answer:"socket",
    options:[
      "socket",
      "pipe",
      "port",
      "machine"
    ]
    },
    {
    id: 11,
    question: "Transport layer protocols deals with ____________",
    answer:"process to process communication",
    options:[
      "application to application communication",
      "process to process communication",
      "node to node communication",
      "man to man communication"
    ]
    },
    {
    id: 12,
    question: "Most packet switches use this principle ____________",
    answer:"Store and forward",
    options:[
      "Stop and wait",
      "Store and forward",
      "Store and wait",
      "Stop and forward"
    ]
    },
    {
    id: 13,
    question: "Which of the following is not an application layer service?",
    answer:"Error control",
    options:[
      "Network virtual terminal",
      "File transfer, access, and management",
      "Mail service",
      "Error control"
    ]
    },
    {
    id: 14,
    question: "In the network HTTP resources are located by",
    answer:"uniform resource identifier",
    options:[
      "uniform resource identifier",
      "unique resource locator",
      "unique resource identifier",
      "union resource locator"
    ]
    },
    {
    id: 15,
    question: "FTP server listens for connection on port number ____________",
    answer:"21",
    options:[
      "20",
      "21",
      "22",
      "23"
    ]
    },
    {
    id: 16,
    question: "The File Transfer Protocol is built on ______________",
    answer:"client server architecture",
    options:[
      "data centric architecture",
      "service oriented architecture",
      "client server architecture",
      "connection oriented architecture"
    ]
    },
    {
    id: 17,
    question: "When the mail server sends mail to other mail servers it becomes ____________",
    answer:"SMTP client",
    options:[
      "SMTP server",
      "SMTP client",
      "Peer",
      "Master"
    ]
    },
    {
    id: 18,
    question: "The underlying Transport layer protocol used by SMTP is ________",
    answer:"TCP",
    options:[
      "TCP",
      "UDP",
      "Either TCP or UDP",
      "IMAP"
    ]
    },
    {
    id: 19,
    question: "Retransmission of packets must not be done when _______",
    answer:"Packet is error-free",
    options:[
      "Packet is lost",
      "Packet is corrupted",
      "Packet is needed",
      "Packet is error-free"
    ]
    },
    {
    id: 20,
    question: "Which type of Ethernet framing is used for TCP/IP and DEC net?",
    answer:"Ethernet II",
    options:[
      "Ethernet 802.2",
      "Ethernet 802.3",
      "Ethernet II",
      "Ethernet SNAP"
    ]
    }
    ];
    
  
function submitForm(e){
    e.preventDefault();
    let name=document.forms["welcome_form"]["name"].value;
    
    
    //storing player name in session storage
    sessionStorage.setItem("name",name);
    location.href="quiz.html";
   // console.log(name);
}



let question_count=0;
let point=0;
function next(){

  let user_answer=document.querySelector("li.option.active").innerHTML;

  if(user_answer==questions[question_count].answer){
    point +=10;
   sessionStorage.setItem("points",point);
  }
  /*else{
    point=0; 
    sessionStorage.setItem("points",point); 
  }*/
  //sessionStorage.setItem("points",point);
 

  if(question_count==questions.length - 1){
    sessionStorage.setItem("time",`${minutes} Minutes ${seconds} Seconds`);
   clearInterval(mytime);
    location.href="end.html";
    return;
  }
 
  
  //check answer by the user
 

    question_count++;
    show(question_count);
    //console.log(question_count);
}

function show(count){
  let question = document.getElementById("questions");

  //question.innerHTML= "<h2>" + questions[count].question + "</h2>";
  question.innerHTML=`<h2>Q${question_count+1}. ${questions[count].question} </h2>
  <ul class="option_group">
                    <li class="option">${questions[count].options[0]}</li>
                    <li class="option">${questions[count].options[1]}</li>
                    <li class="option">${questions[count].options[2]}</li>
                    <li class="option">${questions[count].options[3]}</li>
                </ul>`;
                toggleActive();
}


function toggleActive()
{
  let option=document.querySelectorAll("li.option");
  for(let i=0; i<option.length; i++)
  {
    option[i].onclick= function(){
      for(let j=0; j<option.length; j++)
      {
        if(option[j].classList.contains("active")){
          option[j].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    }
  }
}
















