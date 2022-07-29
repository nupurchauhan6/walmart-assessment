import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserListComponent from './components/UserList';
import UserDetailComponent from './components/UserDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<UserListComponent />} />
          <Route path="users/:userid" element={<UserDetailComponent />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
