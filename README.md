# checkground
# Description
checkground is a simple jQuery plugin which replaces the default checkbox control with an easy to style div element. checkground hides the original element, and updates the checked property based on the state of the background<br>of the checkground element.

# Installation and usage
Download or clone the repo and include the [jquery.checkground.min.js](https://raw.githubusercontent.com/jasonyost/checkground/master/dist/jquery.checkground.min.js) file in your html. checkground is a jQuery plugin so be sure it is loaded after jQuery

```html
<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="dist/jquery.checkground.min.js" charset="utf-8"></script>
```

checkgound can then be called on the desired input(s)

```javascript
$("input[type=checkbox]").checkground();
```

## Parameters

```javascript
$("input[type=checkbox]").checkground({
  debug: false // if set to true will log console messages from checkground
});
```

## Styling
checkground does not add any inline CSS other than to hide the original element you will need to provide styles for the control in your own stylesheet or use the [demo stylesheet](https://raw.githubusercontent.com/jasonyost/checkground/master/demo/demo.css)

```css
.checkground-wrapper{
  width: 25px;
  height: 25px;
  border: 2px solid #13594d;
  padding: 3px;
}

.checkground-checked{
  background-color: #abc;
}
```

## Form interactions
checkground updates the original hidden field with the checked property as it changes, the change event of the input is bound to update the display of the control on change.

## Thanks
Based on the excellent [jquery-boilerplate/jquery-boilerplate](https://github.com/jquery-boilerplate/jquery-boilerplate)
