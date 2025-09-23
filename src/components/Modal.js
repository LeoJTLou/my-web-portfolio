import HuTaoWave from "../assets/hu-tao-wave.jpg";

export default function SuccessModal(props) {
  return (
    <>
      {/* Hidden modal markup */}
      <div className="modal fade text-center" id="successModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{props.title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <img src={HuTaoWave} alt="Success" width="150" height="150" className="mb-3"/>
              <p>{props.body}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}