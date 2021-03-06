/*
 * jQuery Bootstrap News Box v1.0.1
 * 
 * Copyright 2014, Dragan Mitrovic
 * email: gagi270683@gmail.com
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
//Utility
if (typeof Object.create !== 'function') {
    //Douglas Crockford inheritance function
    Object.create = function (obj) {
        function F() { };
        F.prototype = obj;
        return new F();
    };
}

(function ($, w, d, undefined) {

    var NewsBox = {

        init: function ( options, elem ) {
            //cache the references
            var self = this;
            self.elem = elem;
            self.$elem = $( elem );
            
            self.newsTagName = self.$elem.find(":first-child").prop('tagName');
            self.newsClassName = self.$elem.find(":first-child").attr('class');

            self.timer = null;
            self.resizeTimer = null; // used with window.resize event 
            self.animationStarted = false;
            self.isHovered = false;


            if ( typeof options === 'string' ) {
                //string was passed
                if(console) {
                    console.error("String property override is not supported");
                }
                throw ("String property override is not supported");
            } else {
                //object was passed
                //extend user options overrides
                self.options = $.extend( {}, $.fn.bootstrapNews.options, options );
                
                self.prepareLayout();


                //autostart animation
                if(self.options.autoplay) {
                    self.animate();
                }

                if ( self.options.navigation ) {
                    self.buildNavigation();
                }

                //enable users to override the methods
                if( typeof self.options.onToDo === 'function') {
                    self.options.onToDo.apply(self, arguments);
                }

            }
        },

        prepareLayout: function() {
            var self = this;

            //checking mouse position
                
            $(self.elem).find('.'+self.newsClassName).on('mouseenter', function(){
                self.onReset(true);
            });

            $(self.elem).find('.'+self.newsClassName).on('mouseout', function(){
                self.onReset(false);
            });

            //set news visible / hidden
            $.map(self.$elem.find(self.newsTagName), function(newsItem, index){
                if(index > self.options.newsPerPage - 1) {
                    $(newsItem).hide();
                } else {
                    $(newsItem).show();
                }
            });

            //prevent user to select more news that it actualy have

            if( self.$elem.find(self.newsTagName).length < self.options.newsPerPage ) {
                self.options.newsPerPage = self.$elem.find(self.newsTagName).length;
            }
            
            //get height of the very first self.options.newsPerPage news
            var height = 0;

            $.map(self.$elem.find(self.newsTagName), function( newsItem, index ) {
                if ( index < self.options.newsPerPage ) {
                    height = parseInt(height) + parseInt($(newsItem).height()) + 10;
                }
            });

            $(self.elem).css({"overflow-y": "hidden", "height": height});

            //recalculate news box height for responsive interfaces
            $( w ).resize(function() {
                if ( self.reʦ:��+�I����	�	EVѩ�]4(�d񏚓�4��ah��u�Xw28<)#���q�S��N�?h�&yFKN�1�yY��7v@�:��Z-����]��3�=n	��+���z"�?\�is��<װ�����L��c�d~P�0��H�A�9����]�%Б��WB$��a��p�T�X�3W��àt���z"��
ܢ�K ������g{n1.����	���-6�'c�����~r �u�fi�=]r����ְٯK^T�>V/y/������|8��ϸ�����sl�:�T�+]C
5I��U>���������ʜ�QSA�9��nď5�x�]�h�Ĝ���@�6֗w������
$*�$��6�N_��F۝Ikj�O�`K�e͚k�v��Pe�=P����X�M�~׊ÚkX��y ��]K>G}X��������r�F�jT��ߝ�☛(�������]����0$����;����ˊY��i��~�$�s���Y���d�1W�Ӂ��	�I�@L�j)�!�����xK������2U,������/o�$'|A3c��t��D ��\�ɓ���X���n��HV��_@�J��t�N���X[�;�M	��V�۰��ƨi�_b���h渋N�m�G��U�*�IM����gj'�At:��fݼ�X�y�gb�7�}��m��}�4�q���z��5�G����E�]�q���b�"൓��U��������0i�WU�M��da@���A��tF\c�89t	}N�D�WK�޹���m�4oG�2�A�]Ybp�/�\�i��b����%`��Q��v`Q�OE r���0���+�Ot�r8VLu���k�d&pQ_m)�N%���It���5���a��5d�%���u�V��� &��]�klX��K��÷)�s{s�2�$��WL�^���fs?�cC�.���M
�Ӄq�"f���S��8l� ��/s��wo���>zB:���Ji)����d~|!`��dD`���,.�R7�'�Q{��}��$^@���	�Oi����X�<�f51�}Β����I/u�����q�|�������~����o���O=�3��&f�NP9|C����9&�����֞��~��\�C�.��wޛ�5��5Ꮺ��o���mxx@~q9�ǳ]��Ϳ�+ٞK�^�S� ��4������P��܆���+h���7��ie;�e�mum�q���y�4K�����	��_�9d�W�y����Zq��̐,t�Nؕ�KzS��ry��)_"`���l���s-Ì��(�5P��2G��J�jAz�	� bf�9R5����"�o����$W�@��d[0�XES[���"8T���N������)Z�]��t����ْ<�� � 0 4! `  �]fl��e1��V��b�;n�}�_*�J-m��J;O���R���0��/�^���7���U�� ����o�ê�@�wn�sn~6�,�ܰ>�́��+@h`��lAV E����_�<�I���\���bV�����1��l٘�[[n`�m���� �  (�(�{�ݙ۷-*�$��A$"� !���O���,���Վ	JQ�A�$4S@� �r9��e�CΈgБ��9ԫ��lx$�Ff���n�y��~BN��G�K#���h%�{nb�����7Edw�&\-�mW资1�U�ű�㩭�񬐩�6ET��u2l@�E���5��2�A1�y���WԽ�s_R�5�묺 Xo�=hW�U��Qt����D��#���ڑ��6��4��K��PcS6��Wxe�j�4�'sC�%_G=\t5a8U��}ǹ�Uo�_S{Jq�Rp�VlXkۗ�rF����!�����<,h �k��������R*9-Jo��`S� �|etua�i�j,�_��)�9���3u�fl��8�)��L�_u9zp�p�͊�c��ɬ<�V :�V���mk��oW��,_w,�p:W�d�t.���r��N��K�/P|�B�·���r�}^��/$m������b1ԗ�Iu�$��<D�=E'�C���ϻ�i�8$6{��,ʭ:�&�tذ!�4�����u5�+)�ߒ�'\�i`%��M�5�Ē1.�_=�Q/�@v�M�&(tQ�镓��O��HЃ�4^�+�$���>h8��| +˳t�o�I@?��}���3q�2|�����!o#�7��0��V�$d������OjXbj�]�.��X�|��G�}�&+�+���4��`�ir��+��.�Nn���֩bb��8�.&e�	�I��7�j>Ee��ͅ�Ĩ˭%��>�x�n��$�V��H0Qw�g��:��g8�v(lY�pa9���iaS��E�ǣ	zQ���M19��c�
2/�Zͧn�B�w�yQT�o��Bq㻆:��p�Gd,��e�N����U�z�.�������T&��K5$:P�L!_Nbˎ{�r�v�����O�F�̨�OFS1X:����QD7P��9�uY�^Z��� t%�:$�zOq�i�PH B���S,��5����ՖG��RѤr06+�}�3�u�CD�*V��n�(�����5�-uKШ9���*��v�+�'�s�n�omw�d���=j���|Np�4peYN[j�µ 4<,��\�uEEI7�Tz��M�b���I���ϔ>�?�To ���x^�D�3s�2����#��}1�.AC��y*b6+������d���|hR��G�A'y�RF4K9�);��.wL�/�4'�Tx�|�<�:��W�dcy��Ӗ�T���6�������-�}��?��(�<,��>YnO�$�X���Y%��Ř}	��ߵ%�ڶ�� N�����N��9S���m����c�(�k����(�}�S���&�ڜ�v崥v��	q�J� �>po�&}m(�*�^�������b���RD�Ygt�1���J(a=�a,<�����ybx�s��E[�k�V�,��+�Ӓ-|6�`�������W��?��S�.��up@t]T����0�R�]?Okm͂�&���h�9z��һ��o�H(n�
׎�Y�9���;�G���	�ڢ��q�v5��Prź�VO-���5^�(�no�`E�ࢰ��8���ѝ�v#���e�g%p@4�)������=p�6���V̀.��Z��?����dOO�y���g�l��kh!(9<����ct���E���&�L��m6d��cd�j=S!�ۧA�)/7r�p�z$�����%�]�&���×�K����>���f��=t�l�b+o�[S�/�$�z�,�r^O�4x��� Z�J'��m��J<sy{�+�YR��#K��_���Mk�.���h��5N��4,����������}uկR,��#�x��]1������,T2���E�$��R��J��GR$��I����>����N�/���W��H&7�0�.s/f^��-p��]P�Ɨ\Z���Uq�,���v�'P�ciԴ�!ZB��ɑ�_7��3vzPN��7��n����R%�h��d�������%����3�����!y���Į��W8�h�zCA�R�Ѧ���G:	p�h�7��!�n�6(u���7�18�p��@����cHH��&���ϡ�;��'�v�.�&<ɹ~�4�s�焰��?3���#9�L�z�/���,�t�s��{k�]��r���U���?��nb�Ǚ�����H�.��N��}�1}�-j\�p��]�Yv9XVI�Y��Te�����Kj�۟��^��W~,�h�=e�n�A���?i��U8��:0ڎ�a�gZ��
ޔ�aZ#2�
AYt�fj����_'!�`��!�n;�$�Rz�5|�e���h-����Ҫ��rpF6Z�����S��g���D�T�gsu�n���k{�j��!1�A�2��2 <�Ϳڛ���6َv�m
2���qp^��߰P=a2�w�0]�a��%��;1���w�x�u�x��7O?����1S����v�Bށ��ۑ�y�z��!�x?�;6��/��npHRa��	w����eZ�[��F@���b����·T����fL��}���f�'�3�;�
�ւw䊅UA�<J��Z�NK�����jr�ĵ��.��3�p�7��4[���N���RB?~M�?��f�`r]�G���C�b�ӊY+���UA�
�tbf�o������`q��]�'�v���4_���ؕ�f��gZ�[����gEwN%>f�>�>Cщ�(��JG��\;'��4;%���Y졸���i���p|����j�����j�5��l0'"��-u巾.����.{[�J�_����1./̡:�t(���)Gw�5І:�R�#�}e��b��j�d|�\���Aw�c����p��6��x���]?UJ��nW�gLRJ�>��^3�dQ���7��RRU5�������D�5���i%酷�m�EX�1�]��7X��C�sH8�ʠn��*��c�K���uϼ��
��!5k�n��u܏�Ys|�G�����c��- �Œ���!����u�������ճ>}q�>���Z�!5��H���F��ȦL8ؼWYya�U��MR ��߸M
�zJB���S� 8���tJ!���֌֖�Ĭ�������	s;5�=��� ���� ��<.ӌ��S�3��W��'8 z��q�t'� �`X�`f7Y_�@��9���[���o�+]�@*BjɵR���k����;�Q�j��+0v��� ""6
��4J�\�< ����B@�Q�B����7�l�vX����)��_�@��o��(��s�A����U���%�	�*QF�����De4�ju�[W@KWȍ�<h83 �kC{��Z
\#X��x+���Za*���#�@��
O
�\S���i�(~twL����iR�����(�����GX8�ta_!��\t���|�H%̡'�R<S��<�p�a�j�J�o�L!򣺯�� W�8����@��ٜ���6��^�����޷���C��:��U"�dm<�����2S�S	��·;�3��6�#O���e�Ц.J#P����ަ� ꓒgX�i�|��տn�}jqG�"�QZ����B|���T5�#�+w̘�V�Pcb$/�U���K�re�X+��+bx�m��8�=m�V
��9dvc��H81d�#_�n�{P��x:�kW�h��g�/-�-���10�r;[�G([�IyQĮ<1��h&q��X�v<*n��͕g�BL�q�*I*#n����$��)��<ݹ�`Tt�������wz?~q<�ř�EM���p��_��&UC��布�1���@�~��'�ݺ��	��l,���sD|=d�J>���o�e �#Md�����X6y������n	��������R����c<��SP��Pa5�8���@<���>d����Q�im�@��̐�Q�f�����r��[:X$0��o"��~�h~2L`0fONJ��UW��땍:\�r���sظ�%l��xȘ"��L�������s܌L�R� �s�b�c-��8q��d`�W?`���� �-�}r��Ȕf�H��o�����(%�>m2�/k�h�sϜ������p��4%-(���/k��ڄ=�+`,����QI`G
u���Um�e�9�\�xdwVCW4�a�ϊW��M����O|~4��$0 ���K�4^4�sIgC�Vߢ�j����4?��$d�&��[�8�CE��E��͕R�eg��b���t�i��Y�"�Q|��H�l�5{�jD��?ި�����0�w>7���ܑ��!urw(	z���7��p����W��膷�>Ë�$�"