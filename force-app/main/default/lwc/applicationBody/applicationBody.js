import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import FIRST_NAME from '@salesforce/schema/Candidate__c.Name';
import LAST_NAME from '@salesforce/schema/Candidate__c.Last_Name__c';
export default class ApplicationBody extends LightningElement {}