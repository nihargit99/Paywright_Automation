
* Locators: Locators are nothing but the default methods provided by Playwright to identify the location of web elements.

    purple = HTML tag
    Brown = Attribute
    Blue = Attribute value
    Black = Text

* There are mainly 9 different locator techniques we have within the Playwright to identify the location of a web element.
1. getByRole()
2. getByLabel()
3. getByPlaceHolder()
4. getByText()
5. getByAltText()
6. getByTitle() 
7. getByTestId()
8. xpath 
9. css selector


1. getByRole() : This method is all about locating the web element based on its role. 
    
    Syntax : const element = page.getByRole('role' , {name : 'value'})

        role  -> What type of the element it is (button, link, textbox, checkbox, etc..)
        value -> The text or label of the element (The visible text, aria-label, label, or value associated with the element.)

        NOTE: getByRole is mostly depend on value. If text, aria-label, label -> these values are present then only we can use
              getByRole 

e.g.: 
const gmailLink = page.getByRole('link', {name : 'Gmail'}) 
const googleSearch = page.getByRole('textbox', {name : 'Search'}) 
const signInButton = page.getByRole('button', {name : 'Log In'})

2. getByLabel => This method is used to identify the location of a web element based on its label text. 
    
    Syntax : const element = page.getByLabel('label-text'); 
    
works for the element having the tag as 'label' ONLY

e.g.:
const javascriptOption = page.getByLabel('JavaScript');

3. getByPlaceholder => This method is used to identify the location of a web element based on its placeholder attribute value. 
    
    syntax: const firstName = page.getByPlaceholder('First Name');

works for the element having the attribute as 'placeholder' ONLY

e.g.:
const firstName = page.getByPlaceholder('First Name');

4. getByText => Locating the element by using the text value of the element 
    
    syntax: const header = page.getByText('Practice Form');

works for the element having text value ONLY

5. getByAltText => Locating the web element by using the alt text value of the element ( in HTML --> alt =parabank) 

    syntax: const logo = page.getByAltText('ParaBank');

works for the Images. works for the element having the attribute as 'alt' ONLY

6. getByTitle => Locating the web element by using the title of the element. Even if HTML--> autofocus title='value', we can use title here.

    syntax: const googleSearchTextbox = page.getByTitle('Search');

works for the element having the attribute as 'title' ONLY

7. getByTestId => Locate the web element based on the testId attribute value.(in HTML --> data-testid = "value") 

    syntax: const todoList = page.getByTestId('todo-count');

It is rare, works for the element having the attribute as 'title' ONLY

