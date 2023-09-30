import { Page } from "../../components";
import "./Error404Page.style.scss";

function Error404Page(){
    
    return (
        <Page>
          <div className="error404">
            <p><strong>404: Not Found</strong></p>
            <img src="https://media.tenor.com/IHdlTRsmcS4AAAAC/404.gif" alt="funnygif" />
          </div>
        </Page>
      );
}

export default Error404Page;