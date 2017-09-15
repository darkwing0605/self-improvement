import '../css/common.scss';

// 获取图片相关的数据
var imageData = require('../data/imageData.json');

// 利用自执行函数，将图片名信息转成图片URL路径信息
imageData = (function getImageURL(imageDataArr) {
	for (var i in imageDataArr) {
		var singleImageData = imageDataArr[i];

		singleImageData.imageURL = require('../images/' + singleImageData.fileName);

		imageDataArr[i] = singleImageData;
	}
	return imageDataArr;
})(imageData);

var GalleryByReactApp = React.createClass({
	render: function(){
		return (
			<section className="stage">
				<section className="img-sec">
				</section>
				<nav className="controller-nav">
				</nav>
			</section>
		);
	}
});

ReactDOM.render(
	<GalleryByReactApp />,
	document.getElementById('content')
);

module.exports = GalleryByReactApp;