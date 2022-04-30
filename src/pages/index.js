import {Button, Card, Container, Grid} from 'semantic-ui-react'

export default function HomePage({tasks}) {

  if (tasks.lenght === 0) return (
    <Grid
    centered
    verticalAlign="middle"
    columns="1"
    styles={{height: "80hv"}}>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <h1>There are no tasks yet</h1>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToJcMzMgi_dIcVw3mdYQnNXlchfjysKQwVdVLlvnmmmK6fWyQBUYiPy3WpUIPtUn0Mss&usqp=CAU">
          </img>
          <Button primary>Create a Task</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )

  return (
   <Container>
     <Card.Group itemsPerRow={4}>
       {
         tasks.map(task => (
          <Card key={task.di}>
            <Card.Content>
              <Card.Header>{task.title}</Card.Header>
              <p>{task.description}</p>
            </Card.Content>
            <Card.Content extra>
              <Button primary>View</Button> 
              <Button secondary>Edit</Button>
            </Card.Content>
          </Card>
         ))
       }
     </Card.Group>
   </Container>
  )
}

export const getServerSideProps = async (ctx) =>{
  
  const res = await fetch('http://localhost:3000/api/tasks')
  const tasks = await res.json()

  
  return {
    props: {
      tasks,
    }
  }
}
