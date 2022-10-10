
import './App.css';
import {Movies} from './components/Movies'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient()



function App() {
 
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Movies />
    </QueryClientProvider>
   
  );
}

export default App;
