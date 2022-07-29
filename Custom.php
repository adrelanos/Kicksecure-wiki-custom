<php

class Custom {
    /**
     * @param OutputPage $out
     * @param Skin $skin
     */
    public static function onBeforePageDisplay( OutputPage $out, Skin $skin ) {
        $out->addModules( 'ext.backToTopButton' );
        $out->addModuleStyles( 'ext.backToTopButton.styles' );
    }
}
