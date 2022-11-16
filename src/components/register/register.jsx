

const Register = () => {
    return (
        <>
       <div class="flex justify-center  items-center h-screen bg-slate-200">
        <div className="block bg-slate-50 md:w-1/2 p-6 rounded-xl shadow-md shadow-slate-300 w-90">
        <h1 className="text-3xl font-semibold my-4 capitalize text-center border-b-4 border-black pb-2">Create Account</h1>

        <form>
          {/*  Start FullName */}
          <div className="flex flex-row">
                  <div className="w-1/2 mr-1">
                  <label className="">FirstName</label>
                  <input  type="text" name="firstname" placeholder="Enter your firstname" className="my-4 h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required/>
                  </div>
                  <div className="w-1/2 mr-1">
                  <label>LastName</label>
                  <input type="text" name="LastName" placeholder="Enter your LastName" className="my-4 h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"/>
                  </div>
            </div>
            {/* End FullName Here */}
             <div>
            <label>Email</label>
            <input type="text" name="email" placeholder="Enter your Email" className="my-2 h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"/>
            </div>
            <div className="text-sm mb-2">
            <p className="mt-2">Gender</p>
            <input type="radio" name="gender" id="male" className="text-sm mx-1" checked></input><label for="male">Male</label>
            <input type="radio" name="gender" id="female" className="text-sm mx-1" checked></input><label for="male">Female</label>
            <input type="radio" name="gender" id="others" className="text-sm mx-1" checked></input><label for="male">Others</label>
              </div>
              <div>
            <label>Password</label>
            <input type="password" name="Password" placeholder="Enter your Password" className="my-2 h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"/>
            </div>
            <div>
           <label>Confirm Password</label>
            <input type="password" name="Password" placeholder="Confirm your Password" className="my-2 h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"/>
            </div>
           <button type="submit" className="bg-green-500 text-white rounded-lg w-60 px-3 py-3 mt-3 mb-3 ml-20 hover:shadow-lg" >Sign Up</button>
           <p className="text-xs my-2">Already have any account?<a href="/login" className="text-blue-600">Login</a></p>
            </form>
            </div>
        </div>
        </>
      );
}
 
export default Register;