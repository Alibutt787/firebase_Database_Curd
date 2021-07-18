import { Link } from 'react-router-dom';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Admin = () => {
    function functionclick(){

      
            toast.error('Your Email or password is Incorrect ❌❌  ', {
                position: "top-center",
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });


    }
    return (
        
        <div>
<div className="container" style={{textAlign:'center',display:'block'}}>

	<div className="card">
		<div className="card-image">	
			<h2 className="card-heading">
			</h2>
		</div>
       <span>Admin Panal</span>
		<form className="card-form" onSubmit={functionclick}>
			<div className="input" style={{textAlign:'left'}}>
            <label className="input-label">User Name</label>
				<input type="text" class="input-field" placeholder='AliButt12@gmail.com' required/>
			
			</div>
					
						<div class="input" style={{textAlign:'left' , marginBottom:'10px'}}>
                        <label className="input-label">Password</label>
				<input  type="password" class="input-field" required/>
		
			</div>
      
			<div className="action">
				<button className="action-button">Get started</button>
			</div>
		</form>
		<div className="card-info">
			<p>By signing up you are agreeing to our <Link>Terms and Conditions</Link></p>
		</div>
	</div>
</div>






        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
Transition={Zoom}
/>
        </div>
    )
}
