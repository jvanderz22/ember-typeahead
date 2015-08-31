#Ember CLI Typeahead

## Description
This component uses twitter's typeahead (for now) with an ember back-end.

## Installation
npm install jvanderz22-ember-cli-typeahead --save-dev
ember g jvanderz22-ember-cli-typeahead

## Basic Usage

  {{type-ahead class="typeahead" placeholder="Search countries"
             name="countries" highlight=true content=content targetAction="typeAheadTargetAction"}}

## Properties

* content: The data used in the lookup.
* targetAction: This is the action that will be called on events focusIn, focusOut, keyUp and keyDown. The action
will pass in a corresponding value to let the controller know which event triggered it - i.e "focus-in", "focus-out",
"key-up" or "key-down".

## Options
The typeahead box is a `TextField` and so has all those options available. In
addition, it also has the typeahead.js options available. You can find
those options [in their api](https://github.com/twitter/typeahead.js/blob/master/doc/jquery_typeahead.md#api "Twitter typeahead.js API")
under the _Options_ sub-heading.
