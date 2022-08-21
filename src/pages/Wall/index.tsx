import { useNavigate } from 'react-router-dom'
import ButtonComponent from '../../components/Button'
import PostContainer from '../../components/PostContainer'
import PostForm from '../../components/PostForm'
import PostHeader from '../../components/PostHeader'

const Wall = () => {
  const navigate = useNavigate()
  return (
    <main>
      <PostHeader />
      <PostContainer />
      <PostForm />
      <ButtonComponent
        type="button"
        name="Sign In"
        onClick={() => navigate('/')}
      />
    </main>
  )
}

export default Wall
