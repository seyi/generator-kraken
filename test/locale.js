/*───────────────────────────────────────────────────────────────────────────*\
│  Copyright (C) 2016 PayPal                                                  │
│                                                                             │
│hh ,'""`.                                                                    │
│  / _  _ \  Licensed under the Apache License, Version 2.0 (the "License");  │
│  |(@)(@)|  you may not use this file except in compliance with the License. │
│  )  __  (  You may obtain a copy of the License at                          │
│ /,'))((`.\                                                                  │
│(( ((  )) ))    http://www.apache.org/licenses/LICENSE-2.0                   │
│ `\ `)(' /'                                                                  │
│                                                                             │
│   Unless required by applicable law or agreed to in writing, software       │
│   distributed under the License is distributed on an "AS IS" BASIS,         │
│   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  │
│   See the License for the specific language governing permissions and       │
│   limitations under the License.                                            │
\*───────────────────────────────────────────────────────────────────────────*/
/*global describe, it*/

'use strict';


var assert = require('yeoman-assert'),
    testutil = require('./util');


describe('kraken:locale', function () {

    it('creates new locales', function (done) {
        var base = testutil.makeBase('locale');

        base.args = ['Foo', 'DE', 'de'];

        testutil.run(base, function (err) {
            assert.file([
                'locales/DE/de/Foo.properties'
            ]);

            done(err);
        });
    });


    it('creates default locales as en_US', function (done) {
        var base = testutil.makeBase('locale');

        base.args = ['Bar'];

        testutil.run(base, function (err) {
            assert.file([
                'locales/US/en/Bar.properties'
            ]);

            done(err);
        });
    });

});
