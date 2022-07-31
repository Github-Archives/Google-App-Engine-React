import React, { useState } from "react"
import "./AlertModal.css"

const AlertModal = () => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }
  // Section A: This is completely optional & makes the content behind the modal non-scrollable when modal is opened
  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam
        excepturi corrupti doloremque accusantium id ratione ipsa veniam eum
        magnam soluta molestias accusamus, maiores tenetur quae temporibus
        aperiam, sint expedita illum, libero error deserunt maxime omnis vero.
        Quis, iste. Dignissimos quidem repellat architecto expedita atque, nam
        fuga nihil maxime ducimus dolorem magnam in quae cum animi
        exercitationem et velit? Est vitae repellat, ratione, necessitatibus
        facilis veritatis, saepe tempore accusamus magni deleniti itaque aliquid
        rem! Ea laborum soluta et minima animi maiores unde aliquid modi quod
        quasi minus quae exercitationem earum pariatur iste, quisquam dolores
        magnam possimus sapiente excepturi nihil quibusdam, labore eius nam.
        Iure, repellendus! Voluptates eveniet, doloribus voluptatibus enim non
        rerum provident modi fuga possimus cumque quis. Ea laudantium eaque
        vitae, neque consequatur mollitia tempore numquam nam rerum amet porro
        aspernatur. Quam officiis sint atque placeat amet repudiandae corrupti
        totam ab vel perferendis cum dicta, sunt id autem tempore earum tenetur
        quas, blanditiis, dignissimos minima. Harum inventore, fuga placeat
        deleniti animi nulla repellat ducimus, ipsa eius mollitia magni atque
        sint, nesciunt deserunt iure quaerat? Doloremque earum culpa aliquid
        maiores. Quis odit, eius exercitationem et in praesentium obcaecati ex
        doloribus, nostrum dolorum totam harum, reprehenderit autem nobis vitae
        molestias explicabo.
      </p>
    </>
  )
}

export default AlertModal
