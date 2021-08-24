import BaseRoute from "../../base/BaseRoute";

export default BaseRoute.extend<BaseRouteInterface>({
  baseRoute: '/api/v1',
  onready() {
    let self = this;
    self.get('/display/route','display.route',[],self.displayRoute.bind(self));

  }
});