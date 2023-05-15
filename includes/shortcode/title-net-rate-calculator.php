<?php 
/**
 * Shortcode : At Home Title Net Rate Calculator 
 */

/**
 * netret caluclate 
 */
class Title_Net_Rate_Calculator 
{

	/**
     * The unique instance of class
     *
     * @var Title_Net_Rate_Calculator
     */
    private static $instance;

    /**
     * Gets an instance of our class.
     *
     * @return Title_Net_Rate_Calculator
     */
    public static function get_instance()
    {
        if (null === self::$instance) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    /**
     * Singletons should not be cloneable.
     */
    protected function __clone() { }

    /**
     * Singletons should not be restorable from strings.
     */
    public function __wakeup()
    {
        throw new \Exception("Cannot unserialize a singleton.");
    }



	/**
     * Constructor.
     */
    private function __construct()
    {
        // add script and style css
        add_action('wp_enqueue_scripts', array($this, 'enqueue_script'));

        // add shortcode 
        add_shortcode( 'net_rate_calculator', array($this, 'show_calculator') );
    }

	/**
     * Enqueues our scripts and stylesheets.
     */
    public function enqueue_script()
    {
        
    }

    /**
     * Turns our boring post content into kickass post content.
     *
     * @param string $content args
     *
     * @return shrotcode html 
     */
    public function show_calculator( $atts = [], $content = '')
    {
    	ob_start();
    	   require( PROPERTYCALC_DIR . '/includes/shortcode/templates/net_rate_calculator.php'); 
    	$content .= ob_get_clean();
        
        return $content;
    }
}


// init class 
$title_net_rate_calc = Title_Net_Rate_Calculator::get_instance();


