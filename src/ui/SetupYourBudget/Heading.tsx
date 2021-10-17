import Header from '@components/Header'
import Body from '@components/Body'

const Heading: React.FC = () => {
  return (
    <div>
      <div className="mb-3">
        <Header level={2}>Set up your budget</Header>
      </div>
      <Body>Where does your money go each month?</Body>
      <div className="mt-3">
        <input type="text" placeholder="Search categories "></input>
      </div>
    </div>
  )
}

export default Heading
