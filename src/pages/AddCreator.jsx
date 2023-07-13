import '../styles/AddCreator.css';

const AddCreator = () => {
      return (
        <div>
          <div className="addcreator-div">
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
              <label htmlFor="url">Url</label>
              <input type="text" id="url" name="url" />
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description" />
              <label htmlFor="image">Image</label>
              <input type="text" id="image" name="image" />
            </form>
          </div>
        </div>
      );
    };
    

export default AddCreator;