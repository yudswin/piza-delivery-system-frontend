import { AddTextHeader, HeaderWrapper, AdminUsersWrapper } from './style'
import TableComponent from '../../../TableComponent/TableComponent'


const AdminUser = () => {
    return (
        <AdminUsersWrapper>
            <HeaderWrapper>
                <AddTextHeader> USER MANAGEMENT </AddTextHeader>
            </HeaderWrapper>
            <div>
                <TableComponent />
            </div>
        </AdminUsersWrapper>
    )
}

export default AdminUser
