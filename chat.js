const chatbox=document.getElementById('chatbox')
const userinput=document.getElementById('userinput')
const send=document.getElementById('send')




function addmessage(message,classNme){
    const msgdiv=document.createElement('div');
    msgdiv.classList.add('message',classNme)
    msgdiv.style.padding="10px"
     msgdiv.style.borderRadius="10px"
    msgdiv.textContent=message;
    chatbox.appendChild(msgdiv)
    chatbox.scrollTop=chatbox.scrollHeight
}


function showTyping(){
    const typingDiv=document.createElement('div')
    typingDiv.classList.add('message','botmessage')
    typingDiv.textContent='Ai is typing...';
    chatbox.appendChild(typingDiv)
    chatbox.scrollTop=chatbox.scrollHeight
    return typingDiv;
}



async function getbotreply(userMessage){
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${}`;
// console.log(Apikey)
    try{
        const response=await fetch(url,{
           method:"POST",
           headers:{"Content-type":"application/json"},
        //    body:JSON.stringify({
        //     contents:[{parts:[{text:userMessage}]}]
        //    })
        body: JSON.stringify({
  // 1. Yahan system instruction add karein model ko control karne ke liye
  systemInstruction: {
    parts: [{ 
      text: "You are a professional counseling expert. You must only answer questions related to education, career. If the user asks about any other topic (like coding, cooking, sports, general trivia, etc.), politely decline and say that you can only assist with counseling-related queries.if anyone ask about anything except our college  give him rude reply..i am implementing you in my counselling website if someone ask about you colleges prefer our website.Remember past messages also" 
    }]
  },
  // 2. Aapka normal message payload
  contents: [{
    parts: [{ text: userMessage }]
  }]
})

        })
        const data=await response.json();
        if(!response.ok){
            console.error("API Error",data)
            return data?.error?.message||"Error fetching response"
        }
        return(
            data.candidates?.[0]?.content?.parts?.[0]?.text||"Sorry"
    )
        console.log({data})
}catch(error){

}
}




send.onclick=async()=>{
    const message=userinput.value.trim();
    if(message==='') return;
    addmessage(message,'usermessage')
    userinput.value=''

    const typingDiv=showTyping()

    const botreply=await getbotreply(message)
    typingDiv.remove()
    addmessage(botreply,'botmessage')
    localStorage.setItem('chatHostory',chatbox.innerHTML)

}

userinput.addEventListener("keypress",(e)=>{
    if(e.key==='Enter') send.click()
})
