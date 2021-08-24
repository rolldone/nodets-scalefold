import BaseRoute from "../../base/BaseRoute";
import MainHomeController from "@root/app/main/controllers/HomeController";

export default BaseRoute.extend<BaseRouteInterface>({
  baseRoute : '',
  onready(){
    let self = this;
    /* Main route example */
    self.use('/main',[],function(route){
      route.get('','front.index.main',[],MainHomeController.binding().index);
    });

  }
});