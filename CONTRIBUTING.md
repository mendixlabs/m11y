## Local Development

1. Clone Repo
2. Run `yarn` in root folder
3. Run `yarn watch` for Developing or `yarn build` to build folder

4. Set Chrome Extension into Developer mode
   <img  align="center" alt="explainer" src="./assets/devmode.png" target="_blank" />

   4.1 Open a new tab and navigate to `chrome://extensions/`

   4.2 Switch on Developer mode

   4.3 Click on `Load Unpacked`

   4.4 In the file dialog navigate to `~/Root-Repo/m11y.

   4.5 Now the extension will be in your list of extensions and you can use it.

## Writing a Test

All test are in ./src/classes

All test are classes based on a extended class called `ErrorWarning`

Copy `Example_Tag.ts` and rename it to what ever you want your test to be called

Make sure to Import and Export you new class in the `index.ts` file

### Create a Test

In the function called `_scanAllErrors` will have access to `this.allTags` that will be a `HTMLCollectionOf<Element>` or an `Array`.

You cna loop through all found elements and write logic to check what it is you want to check.

To Pass A found Error to the Error List invoke this function from the Extended class

```ts
this._pushErrorToErrorList({
  tag,
  errorType: ErrorEnum.Error, // Can be Error,Warning,Success,
  errorEnumToTarget: ERROR_ENUM_YOU_CREATE,
});
```

ERROR_ENUM_YOU_CREATE is used to identify the error and give in explanations and ways to solve the error.

Create your own ENUM in `types.ts`:

```ts
export enum ERROR_ENUM_YOU_CREATE {
  THATS_NOT_COOL = "THATS_NOT_COOL",
}
```

Also Add your newly created ENUM to the type called `AllErrorEnumTypes`

### Add Class to `content_script.ts`

At the top of the file add create a instance of your class, and pass in the the HTML Tag/ attribute you are going to test on. in this case a `<p>` tag

```ts
const MY_CLASS = new MY_CLASS("p");
```

This will just create an instance of the class but not run anything

### Run Test

In `content_script.ts` there is a function called `getAllErrors` that gets all errors. In this function call your test to run it, and return it following the set way of doing it.

```ts
const MY_CLASS_Errors: IReturnRationalizedData = MY_CLASS.getAllErrorsAndScan();
```

### View Error

In the switch function called `viewAError`

Add a case for your tag, in this example `p`

```ts
    case "p":
      return MY_CLASS.seeErrorsOnType(errorToView?.errorEnumToTarget);
```

This will make it so that the error users can see all the instances of this error in the browser.

### Make Error Step-a-ble

In the switch function called `stepError`

Add a case for your tag, in this example `p`

```ts
case "p":
    return MY_CLASS.stepThrough({
        errorEnumToTarget: errorToView?.errorEnumToTarget,
        step,
    });
```

This will make it so that the error can be step through individually.

### Add Your Error To the Helpers

In the `helpers.ts` files you have to add some stuff to make your test viewable and understandable to everyday users

1. In the switch function called `_getCorrespondingEnum` add a case for your test with its Error Enum you created

```ts
case "p":
    return ERROR_ENUM_YOU_CREATE;
```

2. In the switch function called `_rationalizeTagInformation` add a case for your test.

```ts
case "p":
    return {
        descriptions: _descriptions(type),
        mendixName: "Links",
        showButtons: true,
    };
```

<table style="width:100%">
    <tr>
        <th>Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>
        descriptions
        </td>
        <td>
        See Table Below
        </td>
    </tr>
    <tr>
        <td>
        mendixName
        </td>
        <td>
        Name that Corresponds to the tag you used (p tag will be Text with render-mode Paragraph)
        </td>
    </tr>
    <tr>
        <td>
        showButtons
        </td>
        <td>
        Should the View/Step button be shown
        </td>
    </tr>
</table>

3.  In the switch function called `_descriptions` add a case for your test.

```ts
    case ERROR_ENUM_YOU_CREATE.THATS_NOT_COOL:
        return {
            mendix: "Be Cool make Text Items Paragraphs when Text very Long",
            technical:
          "<p> Tags as used in Descriptions using very long text not set to paragraph will mean its a span tag an will make styling it very difficult see [here](https://www.google.com)",
      };

```

<table style="width:100%">
    <tr>
        <th>Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>
        mendix
        </td>
        <td>
        A mendix friendly explanation of the error (Markdown supported)
        </td>
    </tr>
    <tr>
        <td>
        technical
        </td>
        <td>
        A More technical explanation of the error (Markdown supported)
        </td>
    </tr>
</table>
