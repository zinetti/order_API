import BadRequest from "./BadRequest.js";

class InvalidData extends BadRequest {
  constructor(error) {
    const details = Object.values(error.errors).map(e => e.message);
    super("Um ou mais dados estão incorretos", details);
  }
}

export default InvalidData;
