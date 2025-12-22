import {
  CTable,
  CButton,
} from '@coreui/react'

const Users = () => {
  const users = [
    { id: 1, name: 'John Doe', role: 'Admin' },
    { id: 2, name: 'Jane Smith', role: 'User' },
    { id: 3, name: 'John Smith', role: 'User' },
  ]

  return (
    <>
      <h2 className="mb-4">Users</h2>

      <CTable striped hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.role}</td>
              <td>
                <CButton size="sm" color="info" className="me-2">
                  Edit
                </CButton>
                <CButton size="sm" color="danger">
                  Delete
                </CButton>
              </td>
            </tr>
          ))}
        </tbody>
      </CTable>
    </>
  )
}

export default Users
