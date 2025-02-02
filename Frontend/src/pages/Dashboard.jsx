import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="text-center p-16 mt-52">
      <h1 className="text-4xl font-bold">Welcome to the dashboard</h1>
      <p className="mt-4">Connect with freelancers or manage your projects.</p>
      <Link to={'/login'} className='border rounded-full border-black p-2 m-3'>
        <button>login</button>
      </Link>
    </div>
  )
}

export default Dashboard