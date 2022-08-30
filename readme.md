# testing

- You can make testing with it('name of testing',()=>{}) or test('name of testing',()=>{})

### create some attributes for testing in the components of the next way.

- data-testid='maintitle'

### get the text of an element

```
  screen.getByTestId("maintitle").textContent
```

### get the tag of an element

```
  screen.getByTestId("maintitle").tagName
```
