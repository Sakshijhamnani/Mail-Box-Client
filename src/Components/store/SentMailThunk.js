export const sendMailData=(newMailData)=>{
    console.log('calling Thunk form submit Handler')
    const sendemail=newMailData.to;
    const newSendEmail=sendemail.replace(/[^\w\s]/gi, "");
    const email=localStorage.getItem('email')
    console.log(newSendEmail)
    return async (dispatch) =>{
        const sendData=async()=>{
            const response = await fetch(`https://mail-client-box-5531a-default-rtdb.firebaseio.com/${newSendEmail}.json`, {
                method: 'PUT',
                body: JSON.stringify(newMailData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        
            if (!response.ok) {
                console.error('Failed to send mail');
            } else {
                console.log('Mail Sent');
            }

            const data=await response.json();

            return data;
    }
    try{
        const sentData=await sendData();
        console.log(sentData);

    }catch(error){
        console.log(error.message)
    }
}
}