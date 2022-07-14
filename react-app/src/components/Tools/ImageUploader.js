import ImageUploading from "react-images-uploading";
import { getResort } from "../../store/resorts";
import { useSelector } from "react-redux";

const ImageUploader = ({images, setImages}) => {
	const maxNumber = 10;

	
	const onChange = (imageList) => {
		setImages(imageList);
	};

	return (
		<>
			<div className="image-uploader">
				<h3>Upload your images here:</h3>
				<ImageUploading
					multiple
					value={images}
					onChange={onChange}
					maxNumber={maxNumber}
					dataURLKey="data_url"
				>
					{({
						imageList,
						onImageUpload,
						onImageRemoveAll,
						onImageUpdate,
						onImageRemove,
						isDragging,
						dragProps,
					}) => (
						// write your building UI
						<div className="upload__image-wrapper">
							<button className="imageUploaderBtn-dd"
								style={isDragging ? { color: "red" } : undefined}
								onClick={onImageUpload}
								{...dragProps}
							>
								Click or Drag & Drop images
							</button>
							&nbsp;
							<button className="imageUploaderBtn-rmv" onClick={onImageRemoveAll}>Remove all images</button>
							{imageList.map((image, index) => (
								<div key={index} className="image-item">
									<img src={image["data_url"]} alt="" width="100" />
									<div className="image-item__btn-wrapper">
										<button className="imageUploaderBtn-edit" onClick={() => onImageUpdate(index)}><i class="fa fa-edit"></i></button>
										<button className="imageUploaderBtn-del" onClick={() => onImageRemove(index)}><i class="fa fa-trash-o"></i></button>
									</div>
								</div>
							))}
						</div>
					)}
				</ImageUploading>
			</div>
		</>
	);
};

export default ImageUploader;
